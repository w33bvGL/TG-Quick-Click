/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './pages/**/*.{vue,js,ts,jsx,tsx}',
        './components/**/*.{vue,js,ts,jsx,tsx}',
        './layouts/**/*.{vue,js,ts,jsx,tsx}',
        './assets/**/*.{vue,js,ts,jsx,tsx,sass,scss}',
    ],
    safelist: [
        'bg-vlada-color-10',
        'bg-vlada-color-11',
    ],
    theme: {
        extend: {
            maxWidth: {
                '8xl': '1800px',
            },
            container: {
                'center': true,
                'padding': {
                    'DEFAULT': '15px',
                    "lg": '20px'
                }

            },
            colors: {
                'vlada-color-1': '#D1DDE5',
                'vlada-color-2': '#5F6569',
                'vlada-color-3': '#C3C3C3',
                'vlada-color-4': '#393D4D',
                'vlada-color-5': '#8266FF',
                'vlada-color-6': '#464646',
                'vlada-color-7': '#70EE9C',
                'vlada-color-8': '#A3A7FF',
                'vlada-color-9': '#3B3B3B',
                'vlada-color-10': '#361640',
                'vlada-color-11': '#221D1D',
                'ms-color-10': '#ffe07f',
                'ms-color-11': '#D9D9D9'
            },
            fontFamily: {
                'futur-regular': ['futur-regular', 'sans-serif'],
                "futur-medium": 'Futura PT'
            },
        },
    },
    plugins: [],
}
