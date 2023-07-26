import * as React from 'react';

import cs from 'clsx';

import HtmlHead from 'components/HtmlHead';
import TargetBlankLink from 'components/Link/TargetBlank';
import Script from 'next/script';

const styles = {
  container: 'p-0 flex flex-col min-h-screen',
  main: 'px-4 flex flex-col flex-1',
  footer: 'mt-2 w-full h-12 flex justify-center items-center space-x-2',
  footerLink: 'flex justify-center items-center text-center',
  footerLogo: 'ml-2 h-4',
};

export interface ILayoutBaseProps {
  htmlHead?: JSX.Element;
  header?: React.ReactNode;
  className?: string;
  containerClassName?: string;
  headerClassName?: string;
  children?: React.ReactNode;
}

export const LayoutBase: React.FunctionComponent<ILayoutBaseProps> = ({
  htmlHead = <HtmlHead />,
  children,
  className,
  containerClassName,
}) => {
  return (
    <>
      {htmlHead}

      <div className={cs(styles.container, containerClassName)}>
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-ENTF49JS5W" />
        <Script id="google-analytics">
          {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
 
          gtag('config', 'G-ENTF49JS5W');
        `}
        </Script>

        <main className={cs(styles.main, className)}>{children}</main>

        <footer className={styles.footer}>
          <TargetBlankLink
            className={styles.footerLink}
            href="https://bit.ly/43w9O8I"
          >
            {`Попередження про використання`}
          </TargetBlankLink>
        </footer>
      </div>
    </>
  );
};

export default LayoutBase;
