export type ChangeDocumentTitleProps = (title: string) => string

export type PageTitleHookProps = () => {
  changeDocumentTitle: ChangeDocumentTitleProps
}
