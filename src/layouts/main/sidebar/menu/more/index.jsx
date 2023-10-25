import { Popover, Disclosure } from "@headlessui/react";
import { Link } from "react-router-dom";
export const More = () => {
  return (
    <Popover className="relative">
      <Popover.Button className="py-[3px] block group outline-none ">
        <button className="py-[3px] block group outline-none">
          <div
            className={
              "p-3 rounded-full transition-colors inline-flex items-center gap-5 group-hover:bg-[#eff3f41a]"
            }
          >
            <svg viewBox="0 0 24 24" class="h-[1.641rem]">
              <path
                fill="currentColor"
                d="M3.75 12c0-4.56 3.69-8.25 8.25-8.25s8.25 3.69 8.25 8.25-3.69 8.25-8.25 8.25S3.75 16.56 3.75 12zM12 1.75C6.34 1.75 1.75 6.34 1.75 12S6.34 22.25 12 22.25 22.25 17.66 22.25 12 17.66 1.75 12 1.75zm-4.75 11.5c.69 0 1.25-.56 1.25-1.25s-.56-1.25-1.25-1.25S6 11.31 6 12s.56 1.25 1.25 1.25zm9.5 0c.69 0 1.25-.56 1.25-1.25s-.56-1.25-1.25-1.25-1.25.56-1.25 1.25.56 1.25 1.25 1.25zM13.25 12c0 .69-.56 1.25-1.25 1.25s-1.25-.56-1.25-1.25.56-1.25 1.25-1.25 1.25.56 1.25 1.25z"
              ></path>
            </svg>
            <div className="pr-4 text-xl">Daha fazla</div>
          </div>
        </button>
      </Popover.Button>
      <Popover.Panel className="w-[318px] absolute bottom-0 left-0 bg-black shadow-box shadow-white rounded-xl overflow-hidden">
        <button
          className={
            "px-4 h-14 w-full transition-colors inline-flex items-center gap-5 hover:bg-[#eff3f41a]"
          }
        >
          <svg viewBox="0 0 24 24" class="h-[1.641rem]">
            <path
              fill="currentColor"
              d="M12 3.786c-4.556 0-8.25 3.694-8.25 8.25s3.694 8.25 8.25 8.25c1.595 0 3.081-.451 4.341-1.233l1.054 1.7c-1.568.972-3.418 1.534-5.395 1.534-5.661 0-10.25-4.589-10.25-10.25S6.339 1.786 12 1.786s10.25 4.589 10.25 10.25c0 .901-.21 1.77-.452 2.477-.592 1.731-2.343 2.477-3.917 2.334-1.242-.113-2.307-.74-3.013-1.647-.961 1.253-2.45 2.011-4.092 1.78-2.581-.363-4.127-2.971-3.76-5.578.366-2.606 2.571-4.688 5.152-4.325 1.019.143 1.877.637 2.519 1.342l1.803.258-.507 3.549c-.187 1.31.761 2.509 2.079 2.629.915.083 1.627-.356 1.843-.99.2-.585.345-1.224.345-1.83 0-4.556-3.694-8.25-8.25-8.25zm-.111 5.274c-1.247-.175-2.645.854-2.893 2.623-.249 1.769.811 3.143 2.058 3.319 1.247.175 2.645-.854 2.893-2.623.249-1.769-.811-3.144-2.058-3.319z"
            ></path>
          </svg>
          <div className="pr-4 text-xl font-bold">Bağlan</div>
        </button>
        <button
          className={
            "px-4 h-14 w-full transition-colors inline-flex items-center gap-5 hover:bg-[#eff3f41a]"
          }
        >
          <svg viewBox="0 0 24 24" class="h-[1.641rem]">
            <path
              fill="currentColor"
              d="M23 3v14h-2V5H5V3h18zM10 17c1.1 0 2-1.34 2-3s-.9-3-2-3-2 1.34-2 3 .9 3 2 3zM1 7h18v14H1V7zm16 10c-1.1 0-2 .9-2 2h2v-2zm-2-8c0 1.1.9 2 2 2V9h-2zM3 11c1.1 0 2-.9 2-2H3v2zm0 4c2.21 0 4 1.79 4 4h6c0-2.21 1.79-4 4-4v-2c-2.21 0-4-1.79-4-4H7c0 2.21-1.79 4-4 4v2zm0 4h2c0-1.1-.9-2-2-2v2z"
            ></path>
          </svg>
          <div className="pr-4 text-xl font-bold">Para kazanma</div>
        </button>
        <Disclosure>
          <Disclosure.Button className="h-[52px] flex items-center justify-between w-full px-4 font-bold hover:bg-[#eff3f41a] transition-colors">
            İçerik Üreticisi Stüdyosu
            <svg
              class="h-[1.172rem]"
              viewBox="0 0 24 24"
              width={18.75}
              height={18.75}
            >
              <path
                fill="currentColor"
                d="M3.543 8.96l1.414-1.42L12 14.59l7.043-7.05 1.414 1.42L12 17.41 3.543 8.96z"
              ></path>
            </svg>
          </Disclosure.Button>
          <Disclosure.Panel className="text-gray-500">
            <Link
              to="/"
              className="flex items-center px-3 h-11 gap-3 text-[15px] font-medium hover:bg-[#eff3f41a] transition-colors text-white"
            >
              <svg viewBox="0 0 24 24" class="h-[1.172rem]">
                <path
                  fill="currentColor"
                  d="M8.75 21V3h2v18h-2zM18 21V8.5h2V21h-2zM4 21l.004-10h2L6 21H4zm9.248 0v-7h2v7h-2z"
                ></path>
              </svg>
              İstatistikler
            </Link>
          </Disclosure.Panel>
        </Disclosure>
        <Disclosure>
          <Disclosure.Button className="h-[52px] flex items-center justify-between w-full px-4 font-bold hover:bg-[#eff3f41a] transition-colors">
            Profesyonel Araçlar
            <svg
              class="h-[1.172rem]"
              viewBox="0 0 24 24"
              width={18.75}
              height={18.75}
            >
              <path
                fill="currentColor"
                d="M3.543 8.96l1.414-1.42L12 14.59l7.043-7.05 1.414 1.42L12 17.41 3.543 8.96z"
              ></path>
            </svg>
          </Disclosure.Button>
          <Disclosure.Panel className="text-gray-500">
            <Link
              to="/"
              className="flex items-center px-3 h-11 gap-3 text-[15px] font-medium"
            >
              <svg viewBox="0 0 24 24" class="h-[1.172rem]">
                <path
                  fill="currentColor"
                  d="M8.75 21V3h2v18h-2zM18 21V8.5h2V21h-2zM4 21l.004-10h2L6 21H4zm9.248 0v-7h2v7h-2z"
                ></path>
              </svg>
            </Link>
          </Disclosure.Panel>
        </Disclosure>
        <Disclosure>
          <Disclosure.Button className="h-[52px] flex items-center justify-between w-full px-4 font-bold hover:bg-[#eff3f41a] transition-colors">
            Ayarlar ve Destek
            <svg
              class="h-[1.172rem]"
              viewBox="0 0 24 24"
              width={18.75}
              height={18.75}
            >
              <path
                fill="currentColor"
                d="M3.543 8.96l1.414-1.42L12 14.59l7.043-7.05 1.414 1.42L12 17.41 3.543 8.96z"
              ></path>
            </svg>
          </Disclosure.Button>
          <Disclosure.Panel className="text-gray-500">
            <svg viewBox="0 0 24 24" class="h-[1.172rem]">
              <path
                fill="currentColor"
                d="M8.75 21V3h2v18h-2zM18 21V8.5h2V21h-2zM4 21l.004-10h2L6 21H4zm9.248 0v-7h2v7h-2z"
              ></path>
            </svg>
          </Disclosure.Panel>
        </Disclosure>
      </Popover.Panel>
    </Popover>
  );
};
