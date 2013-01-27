class TrpgEvent < Event
  include Mongoid::Timestamps

  field :state
  field :closed_at, type: Time
  has_many :potofs,  inverse_of: :event,  class_name:'TrpgPotof'

  def closed?
    closed_at && closed_at < Time.now
  end

  def state
    if closed?
      'CLOSE'
    else
      super
    end
  end

  def status
    TRPG[:event][:state].each_with_object({}) do |(key, name), hash|
      hash[name] = key
    end
  end

  def human_state
    TRPG[:event][:state][state]
  end

  def save
    unless self.turn
      self.turn = story.events.max(:turn).to_i + 1
      self.closed_at = 1.day.since
    end
    super
  end
end

=begin

シーン
シーンは作成した順に並び、それぞれがタイトルを持つ。 シーンにはGMが設定する、下の４種類のタイプがある。
開始から２４時間が過ぎると、このシーンはCLOSEに変化する。

OPEN
公開。 プロローグを含む（プロローグでは参加操作が可能）。 各キャラクターは自分の操作か、GMの操作でこのシーンに参加してよい。

INVITE
招待。 各キャラクターはGMの操作でこのシーンに参加してよい。

SECRET
秘密。 各キャラクターはGMの操作でこのシーンに参加してよい。 発言内容は、参加中のキャラクターにのみ閲覧可能。

CLOSE
終了。 キャラクターは参加できない。 キャラクターは独り言のみ投稿できる。

=end

