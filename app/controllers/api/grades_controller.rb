class Api::GradesController < ApplicationController

  def all_and_then_some
    render json: Grade.all_and_then_some
end

def index
    render json: Grade.all
end

def show
  grade = Grade.find(params[:id])
  render json: grade
end

def create
  grade = Grade.new(grade_params)
  if(grade.save)
    render json: grade
  else
    render json: {errors: grade.errors.full_messages}, status: 422
  end
end

def update
  grade = Grade.find(params[:id])
  if(grade.update(grade_params))
    render json: @grade 
  else
    render {errors: grade.errors.full_messages}, status: 422
  end
end

def destroy
  grade = Grade.find(params[:id])
  render json: grade.destroy
end

private
def grade_params
  params.require(:grade).permit()
end

def set_grade

end
