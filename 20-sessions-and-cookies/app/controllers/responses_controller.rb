class ResponsesController < ApplicationController

    before_action :define_question, :define_response

    def new
    end

    def define_question
        @question = Question.order("RANDOM()").limit(1)[0]
    end

    def define_response
        @questionResponse = Response.new({ question: @question })
    end

    def create
        # byebug
        # @number_correct = 0
        # cookies[:correct] ||= 0
        if !session[:correct]
            session[:correct] = 0
        end
        response = Response.create(response_params)
        if response.question.correct_answer == response.answer
            # @number_correct += 1
            session[:correct] = session[:correct].to_i + 1
            # puts "Correct"
            flash[:message] = "Correct!"
        else
            # puts "Incorrect"
            flash[:message] = "Incorrect!"
        end
        redirect_to '/random-question'
    end

    def response_params
        params.require(:response).permit(:answer_id, :question_id)
    end

end
