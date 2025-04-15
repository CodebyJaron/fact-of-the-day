# Fact of the Day

A modern, accessible, and SEO-optimized web application that delivers
interesting facts daily. Built with Next.js, TypeScript, and Tailwind CSS.

## Features

-   �� Daily random facts from
    [Useless Facts API](https://uselessfacts.jsph.pl/)
-   📜 Historical facts from [On This Day API](https://byabbe.se/on-this-day/)
-   🔢 Number facts from [Numbers API](http://numbersapi.com/)
-   📱 PWA support (installable on mobile devices)
-   🌙 Dark mode support
-   ♿️ 100% accessibility score
-   🔍 SEO optimized
-   🚀 Fast performance

## Tech Stack

-   [Next.js](https://nextjs.org/) - React framework
-   [TypeScript](https://www.typescriptlang.org/) - Type safety
-   [Tailwind CSS](https://tailwindcss.com/) - Styling
-   [Framer Motion](https://www.framer.com/motion/) - Animations
-   [Lucide Icons](https://lucide.dev/) - Icons
-   [Vercel](https://vercel.com/) - Hosting & Deployment

## APIs Used

### Useless Facts API

-   Endpoint: `https://uselessfacts.jsph.pl/random.json`
-   Provides random interesting facts
-   Used for the "Random" category

### On This Day API

-   Endpoint: `https://byabbe.se/on-this-day/{month}/{day}/events.json`
-   Provides historical events for specific dates
-   Used for the "History" category

### Numbers API

-   Endpoint: `http://numbersapi.com/{number}`
-   Provides interesting facts about numbers
-   Used for the "Numbers" category

## Getting Started

### Prerequisites

-   Node.js 18.0 or later
-   npm or yarn

### Installation

1. Clone the repository:

```bash
git clone https://github.com/codebyjaron/fact-of-the-day.git
cd fact-of-the-day
```

2. Install dependencies:

```bash
npm install
# or
yarn install
```

3. Run the development server:

```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Building for Production

```bash
npm run build
# or
yarn build
```

## Deployment

The application is deployed on Vercel at
[fact.codebyjaron.nl](https://fact.codebyjaron.nl):

1. Push your code to GitHub
2. Import the project in Vercel
3. Deploy!

## SEO & Performance

-   Optimized metadata for search engines
-   Proper OpenGraph tags for social sharing
-   Sitemap and robots.txt for search engine crawling
-   High performance score on Google PageSpeed Insights
-   100% accessibility score
-   Proper PWA configuration with manifest.json
-   Responsive design for all devices

## PWA Features

-   Installable on mobile devices
-   Works offline
-   Fast loading times
-   Proper icon support for all platforms
-   Theme color integration
-   Proper viewport settings for accessibility

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file
for details.

## Acknowledgments

-   [Useless Facts API](https://uselessfacts.jsph.pl/) for random facts
-   [On This Day API](https://byabbe.se/on-this-day/) for historical facts
-   [Numbers API](http://numbersapi.com/) for number facts
-   Next.js team for the amazing framework
-   Tailwind CSS for the utility-first CSS framework
-   Vercel for hosting and deployment
