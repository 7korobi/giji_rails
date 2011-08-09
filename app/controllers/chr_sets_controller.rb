class ChrSetsController < ApplicationController
  expose(:chr_sets){ ChrSet.all }
  expose(:chr_set)

  def index
    respond_to do |format|
      format.html # index.html.erb
      format.json { render json: chr_sets }
    end
  end

  def show
    debugger
    respond_to do |format|
      format.html # show.html.erb
      format.json { render json: chr_set }
    end
  end

  def new
  end

  def edit
  end

  def create
    if chr_set.save
    redirect_to  chr_set, notice: 'Chr set was successfully created.'
    else
    render action: "new"
    end
  end

  def update
    if chr_set.update_attributes(params[:chr_set])
      redirect_to @chr_set, notice: 'Chr set was successfully updated.'
    else
      render action: "edit"
    end
  end

  def destroy
    chr_set.destroy
    redirect_to chr_sets_url
  end
end
