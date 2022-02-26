export const renderCategoryScreen = (slug) => {
    switch (slug) {
      case 'mens':
        return 'Mens'
      case 'womens':
        return 'Womens'
      case 'home-living':
        return 'Home Living'
      case 'accessories':
        return 'Accessories'
      case 'custom-label':
        return 'Custom Label'
      default:
        return ''
    }
  }