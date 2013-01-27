module ModelManage
  module Bitfield
    def self.included(base)
      def base.bitfield field, bits
        all = (1 << bits.size) - 1
        const_set "ALL_BITS", all

        bits.each_with_index do |key, index|
          mask = 1 << index 
          const_set "#{key}_BIT".upcase, mask

          define_method "#{key}?" do
            self[:status][index] != 0
          end

          define_method "#{key}=" do |bit|
            case bit
            when nil, false, 0
              self[:status] &= all - mask
            else
              self[:status] |= mask
            end
          end
        end
      end
    end
  end
end