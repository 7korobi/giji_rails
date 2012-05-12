# -*- coding: utf-8 -*-

require 'spec_helper'

describe Article do
  context "title bodyを指定した場合" do
    before do
      @article = Article.new(
        :title => "初めてのブログ",
        :body  => "最初の記事です。"
      )
    end
    it "titleがセットされていること" do
      @article.title.should == "初めてのブログ"
    end
    it "bodyがせっとされていること" do
      @article.body.should == "最初の記事です。"
    end
  end
end

