import { ImageResponse } from 'next/og';
import { readFileSync } from 'node:fs';
import { join } from 'node:path';

export const runtime = 'nodejs';
export const alt = 'Abdelrahman Al-Meshwady // Software Engineer';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default async function Image() {
    const fontPath = join(process.cwd(), 'public/fonts/Inter-Bold.ttf');
    const fontData = readFileSync(fontPath);

    return new ImageResponse(
        (
            <div
                style={{
                    height: '100%',
                    width: '100%',
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: '#000000',
                    fontFamily: 'Inter',
                    padding: '0 80px',
                }}
            >
                {/* 1. THE LOGO: Shifted to the left */}
                <div style={{ display: 'flex', marginRight: '60px' }}>
                    <svg
                        width="320"
                        height="320"
                        viewBox="0 0 1080 1080"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            fill="#E95420"
                            d="M738.3 428.8a57 57 0 0 0-18.6-22.4 57 57 0 0 0-45.4-9.5 59 59 0 0 0-44.7 42.7c-21.8-3.6-13.7-2.4-34.3 2.8a61.4 61.4 0 0 0-76.8-29.3 62 62 0 0 0-37.4 44.6h-49.6c-.4 0-1.2 0-1.2-.4v-1l5.7-59.2 4.1-44.3-43.4-16.4-49.2-18.8-23.7 52.4q-.6 1.3-.8 2.6l15.2 51.7 9 30.4c0 .2.4.7.5.6h.4l4.7-4.2 15.4-13.5 35.9 18 16.6 33.5 5.8 11.3 10.8 48.5 14.4 61.9 29 22.2 82.7 44-96.6-36.9 22.4 42.8 41.1 43.9 63.3 67.7 16.8 18 33.9-25 24-17.7 7.2-111.5 12.5-19.9 8.5-13.2 8.1-12.9L717 509.6l-22.2 38.7-10 42-8.1 35.6-10.7 46.3-87.6 10.8-17.8-27.4-23-34.8-28.5-43.2-18-27.3-49.6-38.9-13.8-10.7a3 3 0 0 1-1.2-2.6l2.4-25.3h51.4a58 58 0 0 0 9.5 29.2 60 60 0 0 0 91.1 12.6 60 60 0 0 0 19-58.5c16.1-4.4 10.4-4.6 27.2-2.3q.6.2.8 1.5a58.4 58.4 0 0 0 61.3 56.9 58 58 0 0 0 49.1-83.3Zm-197.5 85.8a45.3 45.3 0 1 1 0-90.6 45.3 45.3 0 0 1 0 90.6M686 497a43 43 0 1 1 0-86 43 43 0 0 1 0 86m-61.7-192-15 2.5-103.4-9-39.2-28-47.3-33.8 38.8-47.6 30.1-6.2 82.2-17.4 48.7 10.6 58 12.6 36.1 65.7-40.8 36.8-8.7 7.8zm-75.9 587.9L502 875l-29-11-32-12.2-30-11.5c-8.6-3.3-16.9-6.3-25.4-10l30.1-26.8 18.8-16.8 36 19.3 32.9 17.5 31 .8 70.6 1.6 44.5 82h-61.7z"
                        />
                        <path
                            fill="#E95420"
                            d="M595.6 813.6c-4.6.2-8.8 0-13.5 0l-75.5-1.4-70.1-37.6-4.4-76.5-4.2-80-1.5-29.9 7.7 14.7 38.3 72.7c2.5 4.8 4.2 10.3 8 14.3l46.2 49.9zm113.3 62.8L670 914.5 654.3 887l-37.2-65.8 60.6-44.4 2.3-31.6 32.9 15.9 45.1 22-10.2 27.7-7.3 19.6-8.7 23.4zM460.6 330.8l-16.4 11.4-95.2-35.9-1-11.1-2.6-29.6 54.1-29.1 74.3 52.8 22.1 15.9zm-86.4 494.3-20.3-8.1-27.9-10.7 30.7-36.6 63.9-74.9 4.9 84.5-35.3 31.5zm50.3-276.3.4-.2.5 2z"
                        />
                        <path
                            fill="#E95420"
                            d="m433 579.4-26.8 6.6-31.1-25.1-19-15.2-7.2-23.6-12-41.9 17.7-16.1 14.9-13.3 26.6 12.9 20.8 42.1-7.4 18.1 13.7 22.1 1.7 2.6h-.5v-.2l-16.3-7.4-1.3-.5-.4-.3-2.4-1.1h-.1l-18.3-8.1 7.4-25.7 5.1-9.3-5.2-6.6-20.8-15-14.5 16.1 13.2 40.6 25.5 16.3 5.7 11.2 7.2-3.1 7.5 4.6 13.4 8.4zm279.4-187.8-28.7-56.4-13.6-27 32.5-29.7 7.7 11 13.4 19.1z"
                        />
                        <path
                            fill="#E95420"
                            d="m393 505.3-7.4 25.7-14.8-31.5 4.1-10.1zm16.2 50.2 7.5 4.6-22 2.7 1.6-15.4zm-4.7-17.1 1.9 1.8-2.4-1.1h-.2.1zm19.9 10-16.3-7.4 15.1 5zm-18-8.2 1.7.8-1.3-.5zm19 10.4-.9-1.8-.1-.2v-.2l.5.2z"
                        />
                    </svg>
                </div>

                {/* 2. THE TEXT: Stacked to the right */}
                <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                    <div style={{
                        fontSize: '36px',
                        color: '#FFFFFF',
                        fontWeight: 700,
                        letterSpacing: '0.01em',
                        lineHeight: 1,
                        marginBottom: '12px',
                        textTransform: 'uppercase'
                    }}>
                        Abdelrahman Al-Meshwady
                    </div>
                    <div style={{
                        fontSize: '24px',
                        color: '#E95420',
                        fontWeight: 700,
                        letterSpacing: '0.4em',
                        textTransform: 'uppercase',
                        opacity: 0.9
                    }}>
                        Software Engineer
                    </div>
                </div>
            </div>
        ),
        {
            ...size,
            fonts: [
                {
                    name: 'Inter',
                    data: fontData.buffer as ArrayBuffer,
                    style: 'normal',
                    weight: 700,
                },
            ],
        }
    );
}
