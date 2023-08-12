"use client";
import Link from "next/link";
import { UPDATE, LOGIN } from "@/redux/reducers/users";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function editProfile() {
  const dispatch = useDispatch();
  const router = useRouter();
  const { user, users } = useSelector((state) => state.users);
  let newUsers = [...users];

  const [form, setForm] = useState({
    username: user.username,
    name: user.name,
    phone: user.phone,
  });

  function handleChange(event) {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();

    const i = newUsers.findIndex((x) => x.username === user.username);

    let newData = {
      username: form.username,
      name: form.name,
      phone: form.phone,
      password: user.password,
      repassword: user.repassword,
    };
    newUsers[i] = newData;
    dispatch(UPDATE(newUsers));

    dispatch(LOGIN(newData));
    router.push("/profile");
  }

  return (
    <>
      <div className="flex flex-row w-full  justify-center items-center">
        <div className="w-full sm:w-full md:w-8/12 xl:w-6/12 ">
          <div className="flex flex-1 flex-col max-w-full justify-center relative">
            <Link href="/profile">← BACK</Link>
            <div className="mb-5 mt-5 ">
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
                    name="username"
                    value={form.username}
                    onChange={handleChange}
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
                    name="name"
                    value={form.name}
                    onChange={handleChange}
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
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                  />
                </div>
              </div>
            </form>
            <button
              onClick={handleSubmit}
              className="btn btn-active btn-white w-full rounded-full mt-8"
            >
              Edit Profile
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
