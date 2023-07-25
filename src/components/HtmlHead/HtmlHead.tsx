import * as React from 'react';

import Head from 'next/head';

export interface IHtmlHeadProps {
  title?: string;
  children?: React.ReactNode;
}

export const HtmlHead: React.FunctionComponent<IHtmlHeadProps> = ({
  title,
  children,
}) => (
  <Head>
    <title>
      єТалончик Бот | Допоможe знайти талончик на здачу іспиту в сервісному
      центрі
    </title>
    {children}
  </Head>
);

export default HtmlHead;
