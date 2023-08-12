"use client";

import Link from "next/link";
import LightDark from "../components/LightDark";

export default function Login() {
  return (
    <>
      <div className="flex min-h-screen">
        <div className="flex flex-row w-full">
          <div className="w-6/12 hidden lg:flex flex-col justify-center items-center bg-primary">
            <div className="mb-10">
              <img
                src="https://sin1.contabostorage.com/0a986eb902c4469cb860e43985eb18a1:vocapanel/vocagame/logohijau-3a71-2a9e.webp"
                className="max-w-xs"
              />
            </div>
            <div className="text-white text-center">
              <p className="text-5xl font-bold text-white mb-4">Lorem</p>
              <p className="text-white">
                "Lorem ipsum dolor sit amet. Pokoknya lorem ipsum dulu
              </p>
              <p className="text-white">Lorem ipsum dolor sit amet."</p>
              <p className="text-white">
                "There is no escape from this reality."
              </p>
            </div>
          </div>

          <div className="flex flex-1 flex-col max-w-full justify-center px-24 relative">
            <div class="absolute top-0 right-0 h-16 w-16 pt-10 ">
              <LightDark />
            </div>
            <div className="mb-5">
              <h1 className="text-5xl font-bold text-secondary mb-4 ">
                Silahkan Login
              </h1>
              <p>Masukkan username dan passowrd anda untuk masuk</p>
            </div>

            <form className="mb-8">
              <div className="w-full max-w-full">
                <div className="form-control w-full max-w-none">
                  <label className="label">
                    <span className="label-text">Username</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Username anda .."
                    className="input input-bordered w-full rounded-full"
                  />
                </div>

                <div className="form-control w-full max-w-none mt-4">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input
                    type="password"
                    placeholder="Password anda .."
                    className="input input-bordered w-full rounded-full"
                  />
                </div>

                <Link href="/profile">
                  <button className="btn btn-secondary w-full text-white rounded-full mt-8">
                    Masuk Sekarang
                  </button>
                </Link>
              </div>
            </form>

            <p className="text-center font-semibold">
              Belum punya akun?{" "}
              <Link href="/" className="text-secondary">
                Daftar Sekarang
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
