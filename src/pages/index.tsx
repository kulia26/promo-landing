import * as React from 'react';

import { useTranslation } from 'react-i18next';

import Layout from 'components/Layout';
import TopNav from 'components/TopNav/Home';
import TargetBlank from 'components/Link/TargetBlank';

import hello from 'public/hello.json';
import { TargetBlankLink } from 'components/Link';
import Link from 'next/link';
import updateAssetsPrefix from 'utils/path';

const styles = {
  main: 'justify-center items-center',
};

export const Home: React.FunctionComponent = () => {
  return (
    <Layout className={styles.main}>
      <div className="fs-40 flex flex-col items-center text-7xl">🚗🇺🇦</div>
      <div className="my-0.5 flex flex-col items-center space-y-2 text-6xl font-bold">
        єТалончик Бот
      </div>
      <div className="my-2 flex flex-col items-center text-lg">
        допоможe знайти талончик на здачу іспиту в сервісному центрі
      </div>
      <div className="my-2 flex flex-col items-center text-lg">
        <TargetBlankLink href="https://t.me/talonchyk_bot">
          <div className="my-6 flex flex-col items-center justify-items-center">
            <img
              width={100}
              height={100}
              src={updateAssetsPrefix('vercel.svg')}
              alt="QR Code to telegram bot"
            />
            <span className="my-1">{`t.me/talonchyk_bot`}</span>
          </div>
        </TargetBlankLink>
      </div>
    </Layout>
  );
};

export default Home;
