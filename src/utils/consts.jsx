import classNames from "classnames";
import { BiHomeCircle, BiSearch } from "react-icons/bi";
import { MdNotificationsNone } from "react-icons/md";
export const mainMenu = [
  {
    path: "/",
    title: "Anasayfa",
    icon: {
      active:(
        <div
        className={classNames(
          "p-3 rounded-full inline-flex items-center gap-5 group-hover:bg-[#eff3f41a] transition-colors font-bold",
        )}
      >
        <BiHomeCircle size={26.25} color="#e7e9ea" />
        <div className="text-xl pr-4">Anasayfa</div>
      </div>
      ),
      passive:(
        <div
        className={classNames(
          "p-3 rounded-full inline-flex items-center gap-5 group-hover:bg-[#eff3f41a] transition-colors",
        )}
      >
        <BiHomeCircle size={26.25} color="#e7e9ea" />
        <div className="text-xl pr-4">Anasayfa</div>
      </div>
      )
    },
  },
  {
    path:"/explore",
    title:"Keşfet",
    icon:{
      active: (
        <div
        className={classNames(
          "p-3 rounded-full inline-flex items-center gap-5 group-hover:bg-[#eff3f41a] transition-colors font-bold",
        )}
      >
        <BiSearch size={26.25} color="#e7e9ea" />
        <div className="text-xl pr-4">Keşfet</div>
      </div>
      ),
      passive:(
        <div
        className={classNames(
          "p-3 rounded-full inline-flex items-center gap-5 group-hover:bg-[#eff3f41a] transition-colors",
        )}
      >
        <BiSearch size={26.25} color="#e7e9ea" />
        <div className="text-xl pr-4">Keşfet</div>
      </div>
      )
    }
  },
  {
    path:"/notifications",
    title:"Bildirimler",
    icon:{
      active:(
        <div
        className={classNames(
          "p-3 rounded-full inline-flex items-center gap-5 group-hover:bg-[#eff3f41a] transition-colors font-bold",
        )}
      >
        <MdNotificationsNone size={26.25} color="#e7e9ea" />
        <div className="text-xl pr-4">Bildirimler</div>
      </div>
      ),
      passive:(
        <div
        className={classNames(
          "p-3 rounded-full inline-flex items-center gap-5 group-hover:bg-[#eff3f41a] transition-colors",
        )}
      >
        <MdNotificationsNone size={26.25} color="#e7e9ea" />
        <div className="text-xl pr-4">Bildirimler</div>
      </div>
      )
    }
  }
];
