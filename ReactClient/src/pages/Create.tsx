import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

type FormInputs = {
  destination: string;
  title: string;
  custom: string;
  qrcode: boolean;
};

function Create() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormInputs>();
  const navigate = useNavigate();
  const onSubmit = (data: FormInputs) => {
    const newData = JSON.stringify(data);
    navigate('/link');
  };
  const { t } = useTranslation();
  return (
    <div className="flex justify-center px-8 pt-2 text-left">
      <form onSubmit={handleSubmit(onSubmit)} className="w-2/3">
        <p className="text-4xl font-bold dark:text-white">
          {t('createPageTitle')}
        </p>
        <div className="pt-8 text-left">
          <label htmlFor="destination" className="flex flex-col text-lg">
            {t('createURL')}:
            <input
              type="text"
              {...register('destination', {
                required: true,
                pattern:
                  /((([A-Za-z]{3,9}:(?:\/\/)?)(?:[-;:&=+$,\w]+@)?[A-Za-z0-9.-]+|(?:www.|[-;:&=+$,\w]+@)[A-Za-z0-9.-]+)((?:\/[+~%/.\w-_]*)?\??#?)?)/,
              })}
              className={`mt-2 h-10 rounded px-2 text-lg text-black ring-1 ring-gray-400/[.40] dark:bg-black/[.20] dark:text-white
              ${
                errors.destination &&
                'border-2 border-red-500 focus:outline-none'
              }`}
            />
          </label>
          {errors.destination?.type === 'required' && (
            <span className="text-red-500">{t('createURLErrorRequired')}</span>
          )}
          {errors.destination?.type === 'pattern' && (
            <span className="text-red-500">{t('createURLErrorPattern')}</span>
          )}
        </div>
        <div className="pt-8 text-left">
          <label htmlFor="title" className="flex flex-col text-lg">
            {t('createTitle')} ({t('createOptional')}):
            <input
              type="text"
              {...register('title')}
              className="mt-2 h-10 rounded px-2 text-lg text-black ring-1 ring-gray-400/[.40] dark:bg-black/[.20] dark:text-white"
            />
          </label>
        </div>
        <div className="pt-8 text-left">
          <label htmlFor="custom" className="flex flex-col text-lg">
            {t('createCustom')} ({t('createOptional')}):
            <div className="mt-2 flex flex-row items-center space-x-5">
              <div className="flex h-10 w-32 items-center justify-center rounded ring-1 ring-gray-400/[.40] dark:bg-black/[.20]">
                <p className="text-lg text-gray-700 ">sh0.ty</p>
              </div>
              <p className="text-2xl">/</p>
              <input
                type="text"
                {...register('custom', {
                  pattern: /^[a-zA-Z0-9]+$/,
                })}
                className={`h-10 rounded px-2 text-lg text-black ring-1 ring-gray-400/[.40] dark:bg-black/[.20] dark:text-white ${
                  errors.custom && 'border-2 border-red-500 focus:outline-none'
                }`}
              />
              {errors.custom?.type === 'pattern' && (
                <span className="text-red-500">
                  {t('createCustomErrorPattern')}
                </span>
              )}
            </div>
          </label>
        </div>
        <div className="mt-8 flex flex-row items-center">
          <input type="checkbox" {...register('qrcode')} />
          <p className="pl-4">{t('createQRCode')}</p>
        </div>
        <button
          type="submit"
          className="mt-8 h-8 w-32 rounded-md bg-gradient-to-tr from-purple-600 to-pink-400 text-white"
        >
          {t('createSubmit')}
        </button>
      </form>
    </div>
  );
}

export default Create;
