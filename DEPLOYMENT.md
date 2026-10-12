# Deploying the Nexalinx website

The site is a Next.js app that runs as **one Docker container on port 8058**.
It has no database, no `.env` file and no secrets — Docker is the only
requirement on the server.

| | |
|---|---|
| Container name | `nexalinx-web` |
| Port | `8058` (host) → `8058` (container) |
| Restart policy | `unless-stopped` — comes back after a reboot or crash |
| Health check | built in; `docker compose ps` shows `healthy` when the site responds |

---

## 1. Prerequisites (once per server)

- Docker Engine with the Compose plugin (`docker compose`, v2)
- Git
- Port **8058** free on the server
- Internet access during the build (it downloads npm packages)

Check:

```bash
docker --version
docker compose version
git --version
```

---

## 2. First deployment

**Step 1 — Get the code**

```bash
git clone <REPOSITORY_URL> nexalinx-web
cd nexalinx-web
```

**Step 2 — Build and start**

```bash
docker compose up -d --build
```

The first build takes a few minutes (it installs dependencies and builds the site
inside the image).

**Step 3 — Check it is running**

```bash
docker compose ps
```

Wait until the `STATUS` column shows `(healthy)` — about 20–30 seconds after start.

**Step 4 — Check the site responds**

```bash
curl -I http://localhost:8058
```

Expected: `HTTP/1.1 200 OK`. The site is now live at `http://<server-ip>:8058`.

---

## 3. Deploying an update

Run these from inside the `nexalinx-web` folder each time new code is pushed:

```bash
git pull
docker compose up -d --build
docker image prune -f
```

The last command removes the old, unused image layers to free disk space.
Then repeat the checks from steps 3 and 4.

---

## 4. Rolling back

If an update has a problem, go back to the previous version:

```bash
git log --oneline -5              # find the last good commit
git checkout <commit-id>
docker compose up -d --build
```

When the fix is pushed, return to the latest code with:

```bash
git checkout main
git pull
docker compose up -d --build
```

---

## 5. Everyday commands

| Task | Command |
|---|---|
| Status / health | `docker compose ps` |
| Live logs | `docker compose logs -f` (Ctrl+C to exit) |
| Last 100 log lines | `docker compose logs --tail 100` |
| Restart | `docker compose restart` |
| Stop | `docker compose down` |
| Start again (no rebuild) | `docker compose up -d` |

---

## 6. Optional: domain and HTTPS

To serve the site on a domain (e.g. `nexalinx.com`), put a reverse proxy in front
of port 8058. Example Nginx server block:

```nginx
server {
    server_name nexalinx.com www.nexalinx.com;

    location / {
        proxy_pass http://127.0.0.1:8058;
        proxy_http_version 1.1;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }
}
```

Then add HTTPS with Certbot:

```bash
sudo certbot --nginx -d nexalinx.com -d www.nexalinx.com
```

If the proxy is used, port 8058 does not need to be open to the internet.

---

## 7. Troubleshooting

**`port is already allocated` on start**
Another process is using 8058. Either stop it, or serve the site on a different
host port by changing only the left side of the mapping in `docker-compose.yml`:

```yaml
ports:
  - "9000:8058"   # site now on http://<server-ip>:9000
```

**Build fails during `npm ci`**
Usually no internet access from the server or Docker. Check the network, then run
`docker compose up -d --build` again.

**Status shows `(unhealthy)` or keeps restarting**
Read the logs: `docker compose logs --tail 100`.

**Changes not showing after `git pull`**
Make sure `--build` was included: `docker compose up -d --build`.
