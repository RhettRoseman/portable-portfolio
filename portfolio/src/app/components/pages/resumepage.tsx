
// export default Resumepage

import { Document, Page, View, Text, Image, PDFViewer, StyleSheet, Font} from '@react-pdf/renderer';

const PDF = () => {
    return(
        <Document>
            <Page>
                <View style={{display: 'flex', justifyContent: "center", flexDirection: "column"}}>
                    <Text wrap={false} style={{alignSelf: "flex-end"}}></Text>
                </View>
                <View>

                    <Image  src="/techresumepart1.png" />
                    <Image src="techresumepart2.png"/>
                </View>
            </Page>
        </Document>
    )
}
export default function Resumepage(){
    return(
        <div className='' >
           
           <PDFViewer style={{width:800, height:600, justifyContent: 'center' ,marginLeft:450, }}>
            <PDF/>
           </PDFViewer>
        </div>
    )
}

