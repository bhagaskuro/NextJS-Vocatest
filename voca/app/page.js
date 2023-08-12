"use client";
import Link from "next/link";
import LightDark from "./components/LightDark";

export default function Home() {
  return (
    <>
      <body>
        <div className="flex min-h-screen bg-primary pt-10 pb-5">
          <div className="absolute top-0 right-0 h-16 w-16 pt-10 ">
            <LightDark />
          </div>
          <div className="flex flex-row w-full  justify-center items-center">
            <div className="w-full sm:w-full md:w-8/12 xl:w-6/12 ">
              <div className="flex flex-1 flex-col max-w-full justify-center px-24 relative">
                <div className="mb-5  primary">
                  <h1 className="text-5xl font-bold mb-4">Daftarkan Akun</h1>
                  <p>Daftar akun anda dengan mengisi form dibawah</p>
                </div>

                <form className="mb-8 ">
                  <div className="w-full max-w-full">
                    <div className="form-control w-full max-w-none ">
                      <label className="label">
                        <span className="label-text  primary">
                          Username Anda
                        </span>
                      </label>
                      <input
                        type="text"
                        placeholder="Ketik username anda disini .."
                        className="input input-bordered border-white placeholder-black input-ghost w-full rounded-full"
                      />
                    </div>

                    <div className="form-control w-full max-w-none mt-4">
                      <label className="label">
                        <span className="label-text  primary">Nama Anda</span>
                      </label>
                      <input
                        type="text"
                        placeholder="Ketik nama anda disini .."
                        className="input input-bordered border-white placeholder-black input-ghost w-full rounded-full"
                      />
                    </div>

                    <div className="form-control w-full max-w-none mt-4">
                      <label className="label">
                        <span className="label-text  primary">
                          Nomor Handphone
                        </span>
                      </label>
                      <input
                        type="text"
                        placeholder="Nomor Handphone anda .."
                        className="input input-bordered border-white placeholder-black input-ghost w-full rounded-full"
                      />
                    </div>

                    <div className="form-control w-full max-w-none mt-4">
                      <label className="label">
                        <span className="label-text  primary">Password</span>
                      </label>
                      <input
                        type="password"
                        placeholder="Masukkan password anda .."
                        className="input input-bordered border-white placeholder-black input-ghost w-full rounded-full "
                      />
                    </div>

                    <div className="form-control w-full max-w-none mt-4">
                      <label className="label">
                        <span className="label-text  primary">
                          Konfirmasi Password
                        </span>
                      </label>
                      <input
                        type="password"
                        placeholder="Masukkan kembali password anda .."
                        className="input input-bordered border-white placeholder-black input-ghost w-full rounded-full"
                      />
                    </div>

                    <Link href="/login">
                      <button className="btn btn-active btn-white w-full rounded-full mt-8">
                        Daftar Sekarang
                      </button>
                    </Link>
                  </div>
                </form>

                <p className="text-center font-semibold primary mb-8 text-black">
                  Sudah punya akun? <Link href="/login">Login Sekarang</Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </body>
    </>
  );
}
