class Api::SearchController < ApplicationController

    def index
        if params[:query].present?
            @to_search = PgSearch.multisearch(params[:query])
            # debugger
            if (@to_search != [])
                render :index
            end
        end
    end

end
