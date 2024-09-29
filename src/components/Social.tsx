import React from 'react'

export const Social = () => {
    return (
        <div
            className="fixed  md:flex hidden flex-col items-center gap-x-3 bottom-2 left-4 z-5 transform transition-transform ease-in-out duration-200"
            style={{
                transformOrigin: '90% ',
            }}>
            <div className="flex flex-col gap-y-2 pb-4 dark:text-gray-700 text-white">
                <div className="h-fit flex justify-start items-center">
                    <a aria-label="social-link" className="peer z-20 text-sm cursor-pointer rounded p-2 transition hover:-translate-y-1 hover:bg-neutral-400/10 hover:text-primary dark:hover:bg-neutral-500/20" href="https://www.github.com/Anshkaran7" target="_blank" rel="noopener noreferrer">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-github"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg>
                    </a>
                    <p className="text-sm peer-hover:translate-x-12 transition opacity-0 peer-hover:opacity-100 -translate-y-1 absolute py-2 px-4 bg-neutral-900/30 text-white dark:bg-neutral-700/40 backdrop-blur rounded">
                        https://www.github.com/Anshkaran7
                    </p>
                </div>
                <div className="h-fit flex justify-start items-center">
                    <a aria-label="social-link" className="peer z-20 text-sm cursor-pointer rounded p-2 transition hover:-translate-y-1 hover:bg-neutral-400/10 hover:text-primary dark:hover:bg-neutral-500/20" href="https://www.instagram.com/Anshkaran7" target="_blank" rel="noopener noreferrer">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-instagram">
                            <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
                        </svg>
                    </a>
                    <p className="text-sm peer-hover:translate-x-12 transition opacity-0 peer-hover:opacity-100 -translate-y-1 absolute py-2 px-4 bg-neutral-900/30 text-white dark:bg-neutral-700/40 backdrop-blur rounded">
                        https://www.instagram.com/Anshkaran7</p>
                </div>
                <div className="h-fit flex justify-start items-center">
                    <a aria-label="social-link" className="peer z-20 text-sm cursor-pointer rounded p-2 transition hover:-translate-y-1 hover:bg-neutral-400/10 hover:text-primary dark:hover:bg-neutral-500/20" href="https://www.twitter.com/itsmeekaran" target="_blank" rel="noopener noreferrer">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-twitter">
                            <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z">
                            </path>
                        </svg>
                    </a>
                    <p className="text-sm peer-hover:translate-x-12 transition opacity-0 peer-hover:opacity-100 -translate-y-1 absolute py-2 px-4 bg-neutral-900/30 text-white dark:bg-neutral-700/40 backdrop-blur rounded">
                        https://www.twitter.com/itsmeekaran
                    </p>
                </div>
                <div className="h-fit flex justify-start items-center">
                    <a aria-label="social-link" className="peer z-20 text-sm cursor-pointer rounded p-2 transition hover:-translate-y-1 hover:bg-neutral-400/10 hover:text-primary dark:hover:bg-neutral-500/20" href="https://www.linkedin.com/in/itsmeekaran/" target="_blank" rel="noopener noreferrer">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-linkedin">
                            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect width="4" height="12" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle>
                        </svg>
                    </a>
                    <p className="text-sm peer-hover:translate-x-12 transition opacity-0 peer-hover:opacity-100 -translate-y-1 absolute py-2 px-4 bg-neutral-900/30 text-white dark:bg-neutral-700/40 backdrop-blur rounded">
                        https://www.linkedin.com/in/itsmeekaran/
                    </p>
                </div>
            </div>
            <div className="w-[1px] h-32 mt-1 dark:bg-gray-700 bg-white"></div>

        </div>
    )
}

