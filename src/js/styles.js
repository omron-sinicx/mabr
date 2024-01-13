import data from '../../template.yaml';

import UIkit from 'uikit';
import Icons from 'uikit/dist/js/uikit-icons';

const loadTheme = async () => {
  const theme = data.theme;
  try {
    if (theme == 'dark') {
      await import('../scss/dark-theme.scss');
    } else {
      await import('../scss/theme.scss');
    }
    UIKit.use(Icons);
  } catch (err) {
    console.error(err);
  }
};
loadTheme();
