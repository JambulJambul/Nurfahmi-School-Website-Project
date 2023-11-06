"use client"
import { Dialog, Transition } from "@headlessui/react";
import Link from "next/link";
import Image from 'next/image';
import { Fragment } from "react";
import { XMarkIcon } from '@heroicons/react/24/outline';

export function ContactUs({ isDisplayed, onClose }: { isDisplayed: boolean; onClose: () => void }) {
    return (
        <>
            <Transition show={isDisplayed} as={Fragment}>
                <Dialog as="div" className="relative z-30" onClose={onClose}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-black/25" />
                    </Transition.Child>
                    <div className="fixed inset-0 overflow-y-auto">
                        <div className="flex min-h-full items-center justify-center p-4 text-center">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95"
                            >
                                <Dialog.Panel className="w-full max-w-sm md:max-w-md xl:max-w-xl transform overflow-hidden rounded-2xl bg-yellow-400 border-2 border-amber-500 p-6 shadow-xl transition-all">
                                    <div className="text-right">
                                        <button
                                            type="button"
                                            className="text-white font-extrabold fixed top-4 right-4 drop-shadow"
                                            onClick={onClose}
                                        >
                                            <XMarkIcon className="block h-6 w-6 " />
                                        </button>
                                    </div>
                                    <Dialog.Title as="h3" className="text-2xl md:text-3xl lg:text-4xl text-center font-medium text-white drop-shadow">
                                        Contact Us
                                    </Dialog.Title>
                                    <div className="mt-8">
                                        <div className="mx-16 my-4">
                                            <Link href={"https://wa.link/b8ig6f"}>
                                                <div className="flex items-center justify-center">
                                                    <div>
                                                        <Image src={"/logo/icons8-whatsapp.svg"} height={48} width={48} alt='google-maps-new' className="drop-shadow"></Image>
                                                    </div>
                                                    <p className="text-base md:text-lg xl:text-xl text-white ml-2 drop-shadow">
                                                        Ms Hawa
                                                    </p>
                                                </div>
                                            </Link>
                                        </div>
                                        <div className="mx-16 my-4">
                                            <Link href={"https://wa.link/w2n28j"}>
                                                <div className="flex items-center text-center justify-center">
                                                    <div>
                                                        <Image src={"/logo/icons8-whatsapp.svg"} height={48} width={48} alt='google-maps-new' className="drop-shadow"></Image>
                                                    </div>
                                                    <p className="text-base md:text-lg xl:text-xl text-white ml-2 drop-shadow">
                                                        Bu Yekti
                                                    </p>
                                                </div>
                                            </Link>
                                        </div>
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>
        </>
    );
}
