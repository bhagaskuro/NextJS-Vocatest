import Link from "next/link";
import LightDark from "./LightDark";

export default function Header() {
  return (
    <>
      <div className="navbar bg-primary px-24">
        <div className="flex-1">
          <Link className="normal-case text-xl" href="/profile">
            VocaTest
          </Link>
        </div>

        <div className="flex-none gap-2">
          <LightDark />
        </div>

        <div className="flex-none gap-2">
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img src="https://png2.cleanpng.com/sh/ab9ea97766cff10eaa292ffe9ab50672/L0KzQYq3UsIyN5d5kpH0aYP2gLBuTfNwdaF6jNd7LXnmf7B6TgV0baMyiOR4ZnnvdX7qjPlxNZJ3jJ95b4L3cbPzhb1vbaV8RdU2c4bqPcH1h71qa5DzRdh7ZXWwdLFAjvxwaZUyS6oELUi5PbF1jPlvbahqep8AY0bpR7bthPUzQWc8SJCENEK5RoG5UcE2PWE9SaIDN0e8Qom4TwBvbz==/kisspng-computer-icons-user-profile-clip-art-portable-netw-c-svg-png-icon-free-download-389-86-onlineweb-5c6f7efde29670.9426602115508108779281.png" />{" "}
              </div>
            </label>
            <ul
              tabIndex={0}
              className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
            >
              <li>
                <Link href="/profile/edit">Edit Profile</Link>
              </li>
              <li>
                <Link href="/login">Logout</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
