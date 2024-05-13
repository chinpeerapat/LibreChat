import React from 'react';

function CustomFooter({ config, localize }) {
  const defaultFooter = (
    <>
      <a href={config?.footerLink || 'https://deepbun.com'} 
         target="_blank" rel="noreferrer" className="underline">
        {config?.appTitle || 'DeepChat'} {config?.version || Constants.VERSION}
      </a>
      {' - '}
      {localize('com_ui_new_footer') || 'Default Footer Text'}
    </>
  );

  return (
    <span>
      {config?.customFooter 
        ? (typeof config.customFooter === 'string' ? config.customFooter : config.customFooter)
        : defaultFooter}
    </span>
  );
}

export default CustomFooter;
