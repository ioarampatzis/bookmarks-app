export const BOOKMARK_GROUPS = [
  { id: 'cbde6bab-88b5-420d-b15a-a5d04071f157', name: 'WORK'},
  { id: '73c3d29a-141e-4922-acc5-150b9dfce295', name: 'LEISURE'},
  { id: '101cdd92-fb43-4194-aaaf-6a2ca184ed8f', name: 'PERSONAL'}
];

export const BOOKMARKS = [
  { id: 'e37d1380-e685-48d6-9c33-f19cc072f0c4',
    name: 'Angular Material',
    url: 'https://material.angular.io/',
    groupId:  BOOKMARK_GROUPS[0].id
  },
  {
    id: '140eff6d-f51b-45fb-b0da-7b7ba59ca8fd',
    name: 'DZone',
    url: 'https://dzone.com/',
    groupId:  BOOKMARK_GROUPS[1].id
  },
  { id: 'a80e674e-1593-4843-a575-bb5a9b0c1a9e',
    name: 'Google',
    url: 'https://www.google.com/',
    groupId:  BOOKMARK_GROUPS[2].id
  },
  {
    id: '8518654d-5cbd-4608-aab8-dd56e1d960c9',
    name: 'NGRX',
    url: 'https://ngrx.io/',
    groupId:  BOOKMARK_GROUPS[0].id
  },
  {
    id: '4b5eb776-05f4-45ae-bb16-93256fb4b9b1',
    name: 'Angular',
    url: 'https://angular.io/',
    groupId:  BOOKMARK_GROUPS[0].id
  }
];
