const ProcedureActions = () => {
  return (
    <div
      className="
        mt-3
        flex
        flex-col
        gap-2

        sm:flex-row
        sm:flex-wrap
        sm:gap-3
      "
    >
      <button
        className="
          w-full
          rounded-[5px]
          border border-[#A9DDF7]
          px-3 py-2
          text-[13px]
          text-white
          transition
          hover:bg-white/10

          sm:w-auto
          sm:py-1
          sm:text-[18px]
        "
      >
        Добавить процедуру +
      </button>

      <button
        className="
          w-full
          rounded-[5px]
          border border-red-500
          px-3 py-2
          text-[13px]
          text-red-500
          transition
          hover:bg-red-500/10

          sm:w-auto
          sm:py-1
          sm:text-[18px]
        "
      >
        Удалить процедуру −
      </button>
    </div>
  );
};

export default ProcedureActions;