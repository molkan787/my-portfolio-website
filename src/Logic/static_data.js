const partOfWOR = '<br><br><span class="sht">Part of WalkOnRetail Platform.</span>';
const data = {
    projects: [
        {
            slug: 'ezvideomaker',
            title: 'EZ Video Maker',
            thumbnail: '/images/ezvideomaker.webp',
            image: '/images/ezvideomaker.webp',
            description: 'An easy to use Software for creation of presentation/marketing animated slides videos.\nThe app generates all kinds of animations from simple as fade in/out to physics based animations using Anime.js & FFMPEG',
            tags: ['TypeScript', 'Vue.js', 'Electron', 'FFMPEG', 'Anime.js'],
            // button: {
            //     text: 'Visit website',
            //     link: 'https://www.walkonretail.com'
            // }
        },
        {
            slug: 'restopos',
            title: 'Resto POS',
            thumbnail: '/images/restopos.jpg',
            image: '/images/restopos.jpg',
            description: 'Restaurant POS with Online ordering system, Bookings, Table managment and more',
            tags: ['JavaScript', 'HTML', 'Electron', 'Desktop Application', 'MongoDB', 'Node.js'],
            // button: {
            //     text: 'Visit website',
            //     link: 'https://www.walkonretail.com'
            // }
        },
        {
            slug: 'reg4plates',
            title: 'Reg4Plates Custom eCommerce website',
            thumbnail: '/images/reg4plates.png',
            image: '/images/reg4plates.png',
            description: 'A custom ecommerce website for selling registrations plates with plate preview and documents submission & management',
            tags: ['Typescript', 'Vue.js 3', 'Nuxt.js', 'MongoDB', 'Node.js'],
            // button: {
            //     text: 'Visit website',
            //     link: 'https://www.walkonretail.com'
            // }
        },
        {
            slug: 'Walkonretail',
            title: 'WalkOnRetail POS',
            thumbnail: '/images/walkonretail-min.png',
            image: '/images/walkonretail.png',
            description: 'A complex POS system built with web technologies for multi-location grocery stores, for walk in customers and online shopping.' + partOfWOR,
            tags: ['JavaScript', 'HTML', 'Electron', 'Desktop Application', 'MySQL', 'PHP Backend'],
            button: {
                text: 'Visit website',
                link: 'https://www.walkonretail.com'
            }
        },
        {
            slug: 'WalkonretailAndroidApp',
            title: 'WalkOnRetail Android App',
            thumbnail: '/images/wor-app.jpg',
            image: '/images/wor-app.jpg',
            description: 'A complex e-commerce android application with delivery tracking, digital payment and more.' + partOfWOR,
            tags: ['JavaScript', 'NativeScript', 'Android'],
            button: {
                text: 'View on Google Play',
                link: 'https://play.google.com/store/apps/details?id=xyz.drmstudio.surjan'
            }
        },
        {
            slug: 'Apos',
            title: 'Car Wash POS',
            thumbnail: '/images/apos-i1-min.png',
            image: '/images/apos-i1.png',
            description: 'A complex POS for car wash company with Cloud-Based storage, Credit Card terminal integration, Prepaid & Loyalty cards system, Reporting system and more.',
            tags: ['JavaScript', 'Vue.js', 'Electron', 'Node.js', 'MySQL', 'SQL-ORM'],
            button: {
                text: 'Download demo',
                link: 'https://github.com/molkan787/public-files/blob/master/APOS%20Setup%201.0.2.exe?raw=true',
                sameWindow: true
            }
        },
        {
            slug: 'Adpos',
            title: 'ADPOS',
            thumbnail: '/images/adpos.PNG',
            image: '/images/adpos.PNG',
            description: 'ADPOS is a system for management, storage and generation of invoices for car dealers.',
            tags: ['JavaScript', 'Vue.js', 'Vuetify', 'Electron', 'SQLite', 'SQL-ORM'],
            button: {
                text: 'Download demo'
            }
        },
        {
            slug: 'Aposa',
            title: 'APOSA',
            thumbnail: '/images/aposa.jpg',
            image: '/images/aposa.jpg',
            description: 'APOSA is a simple POS for one location store.',
            tags: ['JavaScript', 'Electron', 'SQLite'],
        }
    ],
    mappedProjects: {},
    skills: [
        { title: 'JavaScript', image: 'javascript.png' },
        { title: 'TypeScript', image: 'typescript.png' },
        { title: 'Node.js', image: 'nodejs.png' },
        { title: 'Vue.js', image: 'vuejs.png' },
        { title: 'HTML5', image: 'html5.png' },
        { title: 'Electron', image: 'electronjs.png' },
        { title: 'C#', image: 'c-sharp.png' },
    ]
}

for(let p of data.projects){
    data.mappedProjects[p.slug] = p
}

data.homeProjects = [
    data.mappedProjects['ezvideomaker'],
    data.mappedProjects['Walkonretail'],
    data.mappedProjects['Apos'],
]

module.exports = data;