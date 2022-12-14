import React from "react";

const InputField = ({ label, type, name, value, onChange }) => (
  <label className="block mb-4">
    <span className="block text-sm font-medium text-slate-700">{label}</span>
    <input
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      required
      className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
    focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
    disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none"
    />
  </label>
);

export default InputField;
