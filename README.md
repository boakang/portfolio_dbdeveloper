# Portfolio (React + Vite)

## Chạy local

```bash
npm install
npm run dev
```

Mở: `http://localhost:5173/`

## Lấy link để dán vào CV (Deploy GitHub Pages)

Repo đã có sẵn workflow deploy ở `.github/workflows/deploy-pages.yml`.

1) Tạo repo GitHub và push code lên nhánh `main`.
2) Vào **Settings → Pages**
	- **Build and deployment** → chọn **Source: GitHub Actions**.
3) Sau khi workflow chạy xong, link portfolio sẽ là:

`https://<username>.github.io/<repo>/`

Ví dụ: `https://boakang.github.io/portfolio/`

## Build

```bash
npm run build
```
