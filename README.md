### @SCO-techlab/easy-files
Easy files management for Node, you can install and use it in Express or NestJS too.
Easy files is full asynchronus to make easier the files management in the server side.


### Get Started
- Install dependency
<pre>
    npm i @sco-techlab/easy-files
</pre>
- Import in your application
<pre>
    import * as easyfiles from '@sco-techlab/easy-files';
</pre>


### Export interfaces
- IMulterFile
<pre>
export interface IMulterFile {
    fieldname: string;
    originalname: string;
    encoding: string;
    mimetype: string;
    size: number;
    destination: string;
    filename: string;
    path: string;
    buffer: Buffer;
    stream: stream.Readable;
}
</pre>
- IFileObjectOptions
<pre>
export interface IFileObjectOptions {
    fieldname?: string;
    encoding?: string;
    mimetype?: string;
    stream?: boolean;
}
</pre>


### Export methods
- fileObject = async ( file: string, options: IFileObjectOptions = {} ): Promise&lt;IMulterFile&gt;
- dataUrl = async ( file: IMulterFile | string, deleteTmpFile: boolean = true ): Promise&lt;unknown&gt;
- base64 = async ( file: IMulterFile | string ): Promise&lt;string&gt;
- mimeType = async ( file: IMulterFile | string ): Promise&lt;string&gt;
- exists = async ( file: IMulterFile | string ): Promise&lt;boolean&gt;
- save = async ( file: IMulterFile | string, destination: string, new_name: string = undefined ): Promise&lt;boolean&gt;
- remove = async ( file: IMulterFile | string ): Promise&lt;boolean&gt;