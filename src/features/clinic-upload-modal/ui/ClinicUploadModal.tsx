"use client";

import { useState } from "react";

interface ClinicUploadModalProps {
  open: boolean;
  onClose: () => void;
  onUpload?: (files: File[]) => void;
}

const ClinicUploadModal = ({
  open,
  onClose,
  onUpload,
}: ClinicUploadModalProps) => {
  const [files, setFiles] = useState<File[]>([]);

  if (!open) return null;

  const handleFilesChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const selectedFiles = event.target.files;

    if (!selectedFiles) return;

    setFiles((prev) => [
      ...prev,
      ...Array.from(selectedFiles),
    ]);
  };

  const handleDelete = (index: number) => {
    setFiles((prev) =>
      prev.filter((_, i) => i !== index)
    );
  };

  const handleUpload = () => {
    onUpload?.(files);
    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 px-4 backdrop-blur-sm"
    >
      <div
        className="w-full max-w-[500px] rounded-[18px] bg-white p-6 shadow-2xl"
      >
        {/* Заголовок */}
        <h2
          className="text-[22px] font-bold text-[#092C56]"
        >
          Загрузка документов
        </h2>

        {/* Блок загрузки */}
        <div
          className="mt-6 rounded-[12px] border-2 border-dashed border-[#D5DDE5] bg-[#F7F7F7] p-8"
        >
          <div
            className="flex flex-col items-center justify-center"
          >
            <svg
              width="44"
              height="44"
              fill="none"
              viewBox="0 0 24 24"
              stroke="#8E9AA7"
              strokeWidth="1.8"
            >
              <path d="M4 18a3 3 0 010-6h1a5 5 0 019.8-1.2A4 4 0 1120 18H4Z" />
              <path d="M12 9v7" />
              <path d="m9.5 11.5 2.5-2.5 2.5 2.5" />
            </svg>

            <p
              className="mt-4 text-center text-[14px] font-semibold text-[#092C56]"
            >
              Перетащите файлы
              <br />
              сюда или нажмите кнопку ниже
            </p>

            <label
              className="mt-5 cursor-pointer rounded-[8px] bg-[#48B5D0] px-6 py-2 text-[13px] font-bold text-white transition hover:bg-[#35A9CA]"
            >
              Выбрать документы

              <input
                type="file"
                multiple
                onChange={handleFilesChange}
                className="hidden"
              />
            </label>
          </div>
        </div>

        {/* Список файлов */}
        {files.length > 0 && (
          <div
            className="mt-5 max-h-[220px] space-y-2 overflow-y-auto"
          >
            {files.map((file, index) => (
              <div
                key={index}
                className="flex items-center justify-between rounded-[8px] border border-[#D5DDE5] bg-white px-3 py-2"
              >
                <span
                  className="truncate text-[13px] text-[#092C56]"
                >
                  📄 {file.name}
                </span>

                <button
                  type="button"
                  onClick={() => handleDelete(index)}
                  className="text-[18px] font-bold text-red-500"
                >
                  ×
                </button>
              </div>
            ))}
          </div>
        )}

        {/* Подсказка */}
        <p
          className="mt-4 text-[12px] font-medium text-[#FF4D4F]"
        >
          * Загрузите необходимые документы.
        </p>

        {/* Кнопки */}
        <div
          className="mt-6 flex justify-end gap-3"
        >
          <button
            type="button"
            onClick={onClose}
            className="rounded-[8px] border border-[#092C56] px-5 py-2 text-[13px] font-bold text-[#092C56] transition hover:bg-[#F4F6F8]"
          >
            Отмена
          </button>

          <button
            type="button"
            disabled={!files.length}
            onClick={handleUpload}
            className="rounded-[8px] bg-[#092C56] px-5 py-2 text-[13px] font-bold text-white transition hover:bg-[#0F3A72] disabled:cursor-not-allowed disabled:opacity-50"
          >
            Загрузить
          </button>
        </div>
      </div>
    </div>
  );
};

export default ClinicUploadModal;