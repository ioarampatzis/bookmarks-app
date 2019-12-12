export class Bookmark {
  id: string;
  name: string;
  url: string;
  groupId: string;

  constructor(id: string,
              name: string,
              url: string,
              groupId: string) {
    this.id = id;
    this.name = name;
    this.url = url;
    this.groupId = groupId;
  }
}
