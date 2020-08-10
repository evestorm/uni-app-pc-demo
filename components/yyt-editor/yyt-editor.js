// 作者:于大明

export default {
	// 注册属性
	props: {
		inputText: {
			type: String,
			require: false,
			default:""
		}
	},
	mounted() {
		uni.loadFontFace({
			family: 'Pacifico',
			source: 'url("https://sungd.github.io/Pacifico.ttf")'
		})
	},
	data() {
		return {
			readOnly: false,
			formats: {}
		}
	},
	methods: {
		readOnlyChange() {
			this.readOnly = !this.readOnly
		},
		onEditorReady() {
			uni.createSelectorQuery().select('#editor').context((res) => {
				this.editorCtx = res.context
				this.editorCtx.setContents({
					html: this.inputText // 初始化值  
				})
			}).exec()
		},
		undo() {
			this.editorCtx.undo()
		},
		redo() {
			this.editorCtx.redo()
		},
		format(e) {
			let {
				name,
				value
			} = e.target.dataset
			if (!name) return
			this.editorCtx.format(name, value)

		},
		onStatusChange(e) {
			const formats = e.detail
			this.formats = formats
		},
		insertDivider() {
			this.editorCtx.insertDivider({
				success: function() {
					console.log('insert divider success')
				}
			})
		},
		clear() {
			this.editorCtx.clear({
				success: function(res) {
					console.log("clear success")
				}
			})
		},
		removeFormat() {
			this.editorCtx.removeFormat()
		},
		insertDate() {
			const date = new Date()
			const formatDate = `${date.getFullYear()}/${date.getMonth() + 1}/${date.getDate()}`
			this.editorCtx.insertText({
				text: formatDate
			})
		},
		async insertImage() {
			let html=this.getText();
			let [error,res]= await uni.chooseImage({
				count: 1
			});
			
			this.editorCtx.insertImage({
				src: res.tempFilePaths[0],
				alt: '图像'
			})
		},
		getText(){
			let html='';
			let isBack=false;
			this.editorCtx.getContents({
				success(res) {
					html= res.html;
				},
				complete(){
					isBack=true;
				}
			});
			
			while(!isBack){
			}
			return html;
		}
		
	}
}
