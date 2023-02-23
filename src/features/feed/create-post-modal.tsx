import { Fragment, useState } from "react";
import { Dialog, Listbox, Transition } from "@headlessui/react";
import {
  ChevronDownIcon,
  FaceSmileIcon,
  PhotoIcon,
  VideoCameraIcon,
  XMarkIcon,
} from "@heroicons/react/24/solid";
import Image from "next/image";
import classNames from "classnames";

type CreatePostModalProps = {
  isOpen: boolean;
  onClose: () => void;
};
const audiences = [
  { label: "Friends", value: "FRIENDS" },
  { label: "Public", value: "PUBLIC" },
  { label: "Private", value: "PRIVATE" },
];

function CreatePostModal({ isOpen, onClose }: CreatePostModalProps) {
  const [selected, setSelected] = useState(audiences[0]);

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-[2000]" onClose={onClose}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-25" />
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
              <Dialog.Panel className="w-full max-w-xl transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                <div className="flex items-center justify-between gap-2">
                  <Dialog.Title
                    as="h3"
                    className="text-xl font-bold leading-6 text-gray-600"
                  >
                    Create Post
                  </Dialog.Title>
                  <div className="flex items-center gap-2">
                    <Listbox value={selected} onChange={setSelected}>
                      <div className="relative mt-1">
                        <Listbox.Button className="relative flex w-full cursor-pointer items-center rounded-lg bg-gray-50 py-2 pl-3 pr-10 text-left hover:bg-gray-100 focus:outline-none">
                          <span className="block truncate">
                            {selected?.label}
                          </span>
                          <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                            <ChevronDownIcon
                              className="h-4 w-4 text-gray-400"
                              aria-hidden="true"
                            />
                          </span>
                        </Listbox.Button>
                        <Transition
                          as={Fragment}
                          leave="transition ease-in duration-100"
                          leaveFrom="opacity-100"
                          leaveTo="opacity-0"
                        >
                          <Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                            {audiences.map((person, personIdx) => (
                              <Listbox.Option
                                key={personIdx}
                                className={({ selected }) =>
                                  classNames(
                                    "relative cursor-pointer select-none p-2 px-4",
                                    { "bg-blue-100 text-blue-900": selected }
                                  )
                                }
                                value={person}
                              >
                                {person?.label}
                              </Listbox.Option>
                            ))}
                          </Listbox.Options>
                        </Transition>
                      </div>
                    </Listbox>
                    <div
                      onClick={onClose}
                      className="grid h-8 w-8 cursor-pointer place-items-center rounded-full transition-all duration-300 ease-linear hover:bg-gray-100"
                    >
                      <XMarkIcon className="h-5 w-5" />
                    </div>
                  </div>
                </div>
                <div className="my-6 flex gap-4">
                  <div className="relative h-10 w-10 flex-shrink-0 overflow-hidden rounded-full">
                    <Image
                      fill
                      src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
                      alt="User Profile"
                    />
                  </div>
                  <textarea
                    className="w-full rounded-lg bg-gray-50 p-2 px-4 outline-none"
                    placeholder="Whats happening?"
                    rows={4}
                  />
                </div>

                <div className="flex justify-between gap-6">
                  <div className="flex gap-2">
                    <div className="flex cursor-pointer items-center gap-2 rounded-lg p-2 px-4 text-gray-600 hover:bg-gray-100">
                      <VideoCameraIcon className="h-5 w-5" />
                      <span>Live Video</span>
                    </div>
                    <div className="flex cursor-pointer items-center gap-2 rounded-lg p-2 px-4 text-gray-600 hover:bg-gray-100">
                      <PhotoIcon className="h-5 w-5" />
                      <span>Photo/Video</span>
                    </div>
                    <div className="flex cursor-pointer items-center gap-2 rounded-lg p-2 px-4 text-gray-600 hover:bg-gray-100">
                      <FaceSmileIcon className="h-5 w-5" />
                      <span>Feeling</span>
                    </div>
                  </div>
                  <button
                    type="button"
                    className="rounded-lg bg-blue-500 p-2 px-6 text-white transition-all duration-100 ease-linear hover:bg-blue-500/90"
                  >
                    Post
                  </button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}

export default CreatePostModal;
