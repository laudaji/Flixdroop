/* styles.css */ body { margin: 0; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #141414; color: white; }

.header { display: flex; justify-content: space-between; align-items: center; padding: 20px; background-color: #000; }

.header h1 { margin: 0; color: #e50914; }

#search { padding: 8px 12px; font-size: 16px; border-radius: 4px; border: none; width: 200px; }

.movie-container { display: grid; grid-template-columns: repeat(auto-fill, minmax(160px, 1fr)); gap: 16px; padding: 20px; }

.movie-card { background-color: #1c1c1c; border-radius: 8px; overflow: hidden; box-shadow: 0 4px 10px rgba(0,0,0,0.5); transition: transform 0.2s; }

.movie-card:hover { transform: scale(1.05); }

.movie-card img { width: 100%; display: block; }

.movie-card h3 { padding: 10px; font-size: 16px; text-align: center; }

@media (max-width: 500px) { #search { width: 100px; } }

