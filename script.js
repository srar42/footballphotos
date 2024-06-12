document.addEventListener('DOMContentLoaded', () => {
    const wallpaperGrid = document.getElementById('wallpaper-grid');
    const searchInput = document.getElementById('search-input');

    const wallpapers = [
        {
            name: 'Arda Guler',
            url: 'image0 (1).jpeg'
        },
        {
            name: 'Neymar',
            url: 'IMG_0549.jpg'
        },
        {
            name: 'Cristiano Ronaldo',
            url: 'IMG_0550.jpg'
        },
        {
            name: 'Messi',
            url: 'IMG_0551.jpg'
        },
        {
            name: 'Cristiano Ronaldo',
            url: 'IMG_0552.jpg'
        },
        {
            name: 'Neymar',
            url: 'IMG_0553.jpg'
        },
        {
            name: 'Luis Suarez',
            url: 'IMG_0557.jpg'
        },
        {
            name: 'Mourinho',
            url: 'IMG_0559.jpg'
        },
        {
            name: 'Francesco Totti',
            url: 'IMG_0561.jpg'
        },
        {
            name: 'Kroos',
            url: 'IMG_0562.jpg'
        },
        {
            name: 'Vinicius',
            url: 'IMG_0563.jpg'
        },
        {
            name: 'Vinicius',
            url: 'IMG_0564.jpg'
        },
        {
            name: 'Cristiano Ronaldo',
            url: 'IMG_0566.jpg'
        },
        {
            name: 'Guardiola',
            url: 'IMG_0567.jpg'
        },
        {
            name: 'Claudio Pizarro',
            url: 'IMG_0568.jpg'
        },
        {
            name: 'Doku',
            url: 'IMG_0569.jpg'
        },
        {
            name: 'Ronaldo Nazario',
            url: 'IMG_0570.jpg'
        },
        {
            name: 'Ronaldo Nazario',
            url: 'IMG_0572.jpg'
        },
        {
            name: 'Foden',
            url: 'IMG_0573.jpg'
        },
        {
            name: 'Cristiano Ronaldo',
            url: 'image0.jpeg'
        },
        {
            name: 'Endrick',
            url: 'image2.jpeg'
        },
        {
            name: 'Argentina',
            url: 'IMG_0556.jpg'
        },
        {
            name: 'PSG',
            url: 'IMG_0555.jpg'
        },
        {
            name: 'Francia',
            url: 'IMG_0558.jpg'
        },
        {
            name: 'Real Madrid',
            url: 'IMG_0560.jpg'
        },
        {
            name: 'Real Madrid',
            url: 'IMG_0565.jpg'
        },
        {
            name: 'Manchester United',
            url: 'IMG_0554.jpg'
        },
        {
            name: 'Ronaldinho',
            url: 'image1 (1).jpeg'
        },
        {
            name: 'Nkunku',
            url: 'image12.jpeg'
        },
        {
            name: 'Endrick',
            url: 'image13.jpeg'
        },
        {
            name: 'Kante',
            url: 'image14.jpeg'
        },
        {
            name: 'Reus',
            url: 'image15.jpeg'
        },
        {
            name: 'Thiago Silva',
            url: 'image16.jpeg'
        },
        {
            name: 'Lookman',
            url: 'image17.jpeg'
        },
        {
            name: 'Thuram',
            url: 'image18.jpeg'
        },
        {
            name: 'Gasperini',
            url: 'image19.jpeg'
        },
        {
            name: 'Foden',
            url: 'image11.jpeg'
        },
        {
            name: 'Zidane',
            url: 'image10.jpeg'
        },
        {
            name: 'Yaya Toure',
            url: 'image9.jpeg'
        },
        {
            name: 'Cristiano Ronaldo',
            url: 'image8.jpeg'
        },
        {
            name: 'Ronaldo Nazario',
            url: 'image6.jpeg'
        },
        {
            name: 'Joselu',
            url: 'image5.jpeg'
        },
        {
            name: 'Reus',
            url: 'image4.jpeg'
        },
        {
            name: 'Riquelme',
            url: 'image3.jpeg'
        },
        {
            name: 'Dortmund',
            url: 'image2 (1).jpeg'
        }
        // Agrega más wallpapers aquí
    ];

    function renderWallpapers(searchTerm = '') {
        wallpaperGrid.innerHTML = '';
        wallpapers.filter(wallpaper => wallpaper.name.toLowerCase().includes(searchTerm.toLowerCase())).forEach(wallpaper => {
            const wallpaperElement = document.createElement('div');
            wallpaperElement.classList.add('wallpaper');
            wallpaperElement.innerHTML = `
                <div class="wallpaper-image" style="background-image: url('${wallpaper.url}');"></div>
                <p class="wallpaper-text">${wallpaper.name}</p>
                <a href="${wallpaper.url}" download class="download-button">Descargar</a>
            `;
            wallpaperGrid.appendChild(wallpaperElement);
        });
    }

    searchInput.addEventListener('input', () => {
        renderWallpapers(searchInput.value);
    });

    // Renderiza inicialmente todos los wallpapers
    renderWallpapers();
});