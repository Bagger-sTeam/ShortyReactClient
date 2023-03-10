import React from 'react';
import { useTranslation } from 'react-i18next';
import { ReactComponent as GoogleIcon } from '@/assets/google-icon.svg';
import { ReactComponent as GithubIcon } from '@/assets/github-icon.svg';
import { MenuState } from '@/shared/MenuState';

function AuthStage({
  setActiveMenu,
}: {
  setActiveMenu: (state: MenuState) => void;
}) {
  const { t } = useTranslation();
  return (
    <div className="m-2 flex w-60 flex-col items-center pb-2">
      <p className="uppercase text-black dark:text-white ">{t('authLogin')}</p>
      <form
        className="flex w-full flex-col items-center"
        onSubmit={() => setActiveMenu(MenuState.pin)}
      >
        <input
          type="email"
          required
          className="placeholder:text-md mt-4 flex h-[34px] w-11/12 rounded-xl border-[1px] border-gray-300 bg-gray-100/[.60]
      px-3 shadow-sm outline-none outline-0 placeholder:pl-10 placeholder:text-gray-400 dark:border-neutral-600
      dark:bg-[#18161c]/[.50] dark:text-white"
          placeholder={t('authEnterEmail') as string}
        />
        <button
          type="submit"
          className="mt-4 h-[34px] w-11/12 rounded-xl bg-gradient-to-tr from-indigo-300 to-pink-300 shadow-md"
        >
          <p className="text-white">{t('authEnterSubmit')}</p>
        </button>
      </form>
      <p className="mt-2 text-sm text-black dark:text-white">
        {t('authOrWith')}
      </p>
      <div className="mt-2 flex w-11/12 flex-row justify-between space-x-4">
        <button type="button" className="serviceIcon bg-white">
          <GoogleIcon className="h-5 w-5" />
          <p className="mb-[2px] text-black">Google</p>
        </button>
        <button type="button" className="serviceIcon bg-neutral-800">
          <GithubIcon className="h-5 w-5 fill-white" />
          <p className="text-white">GitHub</p>
        </button>
      </div>
    </div>
  );
}

export default AuthStage;
