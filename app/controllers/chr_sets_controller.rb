class ChrSetsController < ApplicationController
  expose(:chr_sets){ ChrSet.all }
  expose(:chr_set)

  respond_to :html, :json

  before_filter :admin_require, only:%w[new create edit update destroy]

  def index
  end

  def show
  end

  def new
  end

  def edit
  end

  def create
    if chr_set.save
      flash[:notice] = "successfully #{action_name}d."
    end
    respond_with chr_set
  end

  def update
    if chr_set.update_attributes(params[:chr_set])
      flash[:notice] = "successfully #{action_name}d."
    end
    respond_with chr_set
  end

  def destroy
    chr_set.destroy
    respond_with chr_set
  end
end
