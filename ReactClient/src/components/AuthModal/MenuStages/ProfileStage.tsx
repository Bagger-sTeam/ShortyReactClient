import React from 'react';
import { useTranslation } from 'react-i18next';
import { NavLink } from 'react-router-dom';
import { MenuState } from '@/shared/MenuState';

function ProfileStage({
  setActiveMenu,
}: {
  setActiveMenu: (state: MenuState) => void;
}) {
  const { t } = useTranslation();
  const linkButtons: { id: number; label: string; link: string }[] = [
    { id: 1, label: t('profileProfile'), link: '/settings' },
    { id: 2, label: t('profileSupport'), link: '/support' },
  ];
  return (
    <div className="w-32">
      {linkButtons.map((option) => (
        <NavLink to={option.link} key={option.id}>
          <button
            type="button"
            className="block w-full px-4 py-2 text-left text-sm leading-5 text-gray-700 hover:bg-gray-50
           hover:text-gray-900 dark:text-gray-300 dark:hover:bg-white/[.05]"
          >
            {option.label}
          </button>
        </NavLink>
      ))}
      <button
        type="button"
        className="block w-full px-4 py-2 text-left text-sm leading-5 text-gray-700 hover:bg-gray-50
           hover:text-gray-900 dark:text-gray-300 dark:hover:bg-white/[.05]"
        onClick={() => {
          window.location.replace('https://github.com/BaggerFast/Shorty');
        }}
      >
        API
      </button>
      <button
        type="button"
        className="block w-full px-4 py-2 text-left text-sm leading-5 text-gray-700 hover:bg-gray-50
           hover:text-gray-900 dark:text-gray-300 dark:hover:bg-white/[.05]"
        onClick={() => setActiveMenu(MenuState.auth)}
      >
        {t('profileLogOut')}
      </button>
    </div>
  );
}

export default ProfileStage;
