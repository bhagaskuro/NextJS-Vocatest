export default function Profile() {
  return (
    <>
      <div className="flex flex-row w-full  justify-center items-center">
        <div className="w-full sm:w-full md:w-8/12 xl:w-6/12 ">
          <div className="flex flex-1 flex-col max-w-full justify-center  relative">
            <div className="mb-5 ">
              <h1 className="text-5xl font-bold mb-4">User Profile</h1>
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
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
