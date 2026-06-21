const DoctorActions = () => {
  return (
    <div className="mt-3 flex flex-wrap gap-2 sm:gap-3">
      <button
        type="button"
        className="
          rounded-[5px]
          border border-[#A9DDF7]
          px-2 py-1
          text-[11px] text-white
          transition hover:bg-white/10

          sm:px-3
          sm:text-[18px]
        "
      >
        Добавить врача +
      </button>

      <button
        type="button"
        className="
          rounded-[5px]
          border border-red-500
          px-2 py-1
          text-[11px] text-red-500
          transition hover:bg-red-500/10

          sm:px-3
          sm:text-[18px]
        "
      >
        Удалить врача −
      </button>
    </div>
  );
};

export default DoctorActions;