import Link from "next/link";

export default function Profile() {
  return (
    <>
      <div className="flex flex-row w-full  justify-center items-center">
        <div className="w-8/12">
          <div className="flex flex-1 flex-col max-w-full justify-center px-24 relative">
            <div className="mb-5 ">
              <h1 className="text-5xl font-bold mb-4">Edit Profile</h1>
            </div>

            <form className="mb-8 ">
              <div className="w-full max-w-full">
                <div className="form-control w-full max-w-none ">
                  <label className="label">
                    <span className="label-text  ">Username</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Ketik username anda disini .."
                    className="input input-bordered  input-ghost w-full rounded-full"
                  />
                </div>

                <div className="form-control w-full max-w-none mt-4">
                  <label className="label">
                    <span className="label-text ">Nama</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Ketik nama anda disini .."
                    className="input input-bordered input-ghost w-full rounded-full"
                  />
                </div>

                <div className="form-control w-full max-w-none mt-4">
                  <label className="label">
                    <span className="label-text ">Nomor Handphone</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Nomor Handphone anda .."
                    className="input input-bordered  input-ghost w-full rounded-full"
                  />
                </div>

                <div className="form-control w-full max-w-none mt-4">
                  <label className="label">
                    <span className="label-text  ">Password</span>
                  </label>
                  <input
                    type="password"
                    placeholder="Masukkan password anda .."
                    className="input input-bordered input-ghost w-full rounded-full "
                  />
                </div>

                <div className="form-control w-full max-w-none mt-4">
                  <label className="label">
                    <span className="label-text  ">Konfirmasi Password</span>
                  </label>
                  <input
                    type="password"
                    placeholder="Masukkan kembali password anda .."
                    className="input input-bordered  input-ghost w-full rounded-full"
                  />
                </div>
              </div>
            </form>
            <Link href="/profile">
              <button className="btn btn-active btn-white w-full rounded-full mt-8">
                Edit Profile
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
