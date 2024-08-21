export type ChangeDocumentTitleProps = (title: string) => string

export type DocumentTitleHookProps = () => {
    changeDocumentTitle: ChangeDocumentTitleProps
}
