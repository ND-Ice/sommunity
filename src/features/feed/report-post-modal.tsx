import classNames from "classnames";
import { Fragment, useState } from "react";
import { Dialog, RadioGroup, Transition } from "@headlessui/react";
import { CheckIcon, XMarkIcon } from "@heroicons/react/24/solid";

type ReportPostModalProps = {
  isOpen: boolean;
  onClose: () => void;
  onReportPostClick: () => void;
};

type ReportCategory = { label: string; value: string };

const reportCategories: ReportCategory[] = [
  {
    label: "Its a spam",
    value: "spam",
  },
  {
    label: "Nudity or sexual activity",
    value: "nudity",
  },
  {
    label: "False Information",
    value: "false information",
  },
  {
    label: "Its abusive or harmful",
    value: "abusive",
  },
  {
    label: "Sale of illegal or regulated goods",
    value: "illegal",
  },
  {
    label: "Intellectual property infringement or defamation",
    value: "defamation",
  },
  {
    label: "Violence or physical harm",
    value: "violence",
  },
  {
    label: "I'm still not interested in this",
    value: "not interested",
  },
];

function ReportPostModal({
  isOpen,
  onClose,
  onReportPostClick,
}: ReportPostModalProps) {
  const [selected, setSelected] = useState(reportCategories[0]);

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
                    Report an Issue
                  </Dialog.Title>
                  <button
                    onClick={onClose}
                    className="grid h-8 w-8 cursor-pointer place-items-center rounded-full transition-all duration-300 ease-linear hover:bg-gray-100"
                  >
                    <XMarkIcon className="h-5 w-5" />
                  </button>
                </div>
                <div className="my-6">
                  <RadioGroup value={selected} onChange={setSelected}>
                    <RadioGroup.Label className="sr-only">
                      Server size
                    </RadioGroup.Label>
                    <div className="space-y-2">
                      {reportCategories.map((category) => (
                        <RadioGroup.Option
                          key={category.label}
                          value={category.value}
                          className={({ checked }) =>
                            classNames(
                              "relative flex cursor-pointer rounded-lg px-5 py-4 shadow-md transition-all duration-100 ease-linear focus:outline-none",
                              { "bg-sky-500 bg-opacity-75 text-white": checked }
                            )
                          }
                        >
                          {({ checked }) => (
                            <>
                              <div className="flex w-full items-center justify-between">
                                <div className="flex items-center">
                                  <div className="text-sm">
                                    <RadioGroup.Label
                                      as="p"
                                      className={classNames("font-medium", {
                                        "text-white": checked,
                                        "text-gray-900": !checked,
                                      })}
                                    >
                                      {category.label}
                                    </RadioGroup.Label>
                                  </div>
                                </div>
                                {checked && <CheckIcon className="h-4 w-4" />}
                              </div>
                            </>
                          )}
                        </RadioGroup.Option>
                      ))}
                    </div>
                  </RadioGroup>
                </div>
                <div className="flex justify-between gap-6">
                  <button
                    onClick={onClose}
                    className="rounded-lg border border-gray-400 p-2  px-6 transition-all duration-100 ease-linear hover:bg-gray-100"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={onReportPostClick}
                    className="rounded-lg bg-blue-500 p-2 px-6 text-white transition-all duration-100 ease-linear hover:bg-blue-500/80"
                  >
                    Submit
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

export default ReportPostModal;
