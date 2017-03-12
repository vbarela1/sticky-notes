class Api::NotesController < ApiController
  protect_from_forgery with: :null_session
  before_action :set_note, only: [:show, :update, :destroy]

  def index
    render json: Note.all
  end

  def show
    render json: @note
  end

  def create
    if @note = Note.create(note_params)
      render json: @note
    else
      render_error(@note)
    end
  end

  def update
    if @note.update(note_params)
      render json: @note
    else
      render_error(@note)
    end
  end

  def destroy
    @note.destroy
  end

  private
    def set_note
      @note = Note.find(params[:id])
    end

    def note_params
      params.require(:note).permit(:title, :body, tags: [])
    end
end
