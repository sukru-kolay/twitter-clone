import { Popover } from "@headlessui/react";
export const Account = () => {
  return (
    <div className="mt-auto">
      <Popover>
        <Popover.Button className="my-3 p-3 rounded-full  w-[89%] bg-[red]">
          <div>test</div>
        </Popover.Button>
        <Popover.Panel>açılacak</Popover.Panel>
      </Popover>
    </div>
  );
};
