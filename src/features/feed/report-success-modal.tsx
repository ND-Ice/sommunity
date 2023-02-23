import { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/solid";

type ReportSuccessModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

function ReportSuccessModal({ isOpen, onClose }: ReportSuccessModalProps) {
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
              <Dialog.Panel className="w-full max-w-lg transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                <div className="flex items-center justify-between gap-2">
                  <Dialog.Title
                    as="h3"
                    className="text-xl font-bold leading-6 text-gray-600"
                  >
                    Thank you for reporting this post
                  </Dialog.Title>
                  <button
                    onClick={onClose}
                    className="grid h-8 w-8 cursor-pointer place-items-center rounded-full transition-all duration-300 ease-linear hover:bg-gray-100"
                  >
                    <XMarkIcon className="h-5 w-5" />
                  </button>
                </div>
                <div className="my-6">
                  <p className="text-justify text-sm text-gray-700">
                    Thank you for reporting this post. we appreciate the time
                    and effort that you put into this. we will thoroughly verify
                    the post and will remove if this post actually violated the
                    rules. and also you will be seeing less of this content in
                    the future.
                  </p>
                </div>
                <div className="flex justify-end gap-6">
                  <button
                    onClick={onClose}
                    className="rounded-lg bg-blue-500 p-2 px-6 text-white transition-all duration-100 ease-linear hover:bg-blue-500/80"
                  >
                    Done
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

export default ReportSuccessModal;
