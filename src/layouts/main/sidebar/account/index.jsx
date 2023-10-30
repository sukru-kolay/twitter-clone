import { Popover } from "@headlessui/react";
import { useAccount } from "../../../../store/auth/hooks";
export const Account = () => {
  const account = useAccount();
  return (
    <div className="mt-auto">
      <Popover>
        <Popover.Button className="my-3 p-3 rounded-full  w-[89%] bg-[red]">
          <div className="flex align-center">
            <div>
              <img
                src={account.avatar}
                alt="Logo"
                className="w-10 h-10 rounded-full"
              />
            </div>
            <div className="m-3">{account.username}</div>
          </div>
        </Popover.Button>
        <Popover.Panel>açılacak</Popover.Panel>
      </Popover>
    </div>
  );
};
