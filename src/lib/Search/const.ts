export const topNavigation = true;
export const iconsWithText = true;

// Social Navigation
export const iconsWithTextSocialStyles = iconsWithText ? `lg:w-48` : `lg:w-24`;
export const topNavigationStyles = `border-b top-0`;
export const botNavigationStyles = `border-t bottom-0`;
export const navPositionStyles = topNavigation ? topNavigationStyles : botNavigationStyles
export const navWidthStyles = iconsWithText ? 'lg:w-16' : 'lg:w-12'


// Song
export const iconsWithTextSongNavStyles = iconsWithText ? `lg:left-48` : `lg:left-24`;

// Song SongImage
export const songImgWidthStyle = 'lg:w-56'
export const songImgWidthBehindStyle = 'w-56 h-48' // h = w - 8

// Song
// img + (iconsWithText ? 16 : 12)
export const songNavWidthStyle = iconsWithText ? 'lg:w-72' : 'lg:w-68' 

// songs/[name]/page
// export const songBodyMarginStyle = iconsWithText ? 'lg:ml-72' : 'lg:ml-48'
export const songBodyMarginStyle = iconsWithText ? 'lg:ml-72' : 'lg:ml-48'